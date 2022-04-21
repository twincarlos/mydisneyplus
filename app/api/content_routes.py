from flask import Blueprint, request
from app.models import Content, Category, Category_Detail, db
from flask_login import current_user
from app.aws import upload_file_to_s3, allowed_file, get_unique_filename
import json

content_routes = Blueprint("contents", __name__)

@content_routes.route('', methods=['GET', 'POST'])
def all_contents():
    if request.method == 'GET':
        categories = Category.query.all()
        categories_dict = {}
        sections = {}

        for category in categories:
            category_details = Category_Detail.query.filter(Category_Detail.category_id == category.id)
            categories_dict.update({ category.name: [content.to_dict() for content in category_details] })

        contents_with_banner = Content.query.filter(Content.banner != None)
        sections.update({ 'Banner': [content.to_dict() for content in contents_with_banner] })

        originals = Content.query.filter(Content.creator_id == 1)
        sections.update({ 'Originals': [content.to_dict() for content in originals] })

        movies = Content.query.filter(Content.content_type == 'Movie')
        sections.update({ 'Movies': [content.to_dict() for content in movies] })

        series = Content.query.filter(Content.content_type == 'Series')
        sections.update(({ 'Series': [content.to_dict() for content in series] }))

        pixar = Content.query.filter(Content.creator_id == 2)
        sections.update(({ 'Pixar': [content.to_dict() for content in pixar] }))

        marvel = Content.query.filter(Content.creator_id == 3)
        sections.update(({ 'Marvel': [content.to_dict() for content in marvel] }))

        star_wars = Content.query.filter(Content.creator_id == 4)
        sections.update(({ 'Star Wars': [content.to_dict() for content in star_wars] }))

        natgeo = Content.query.filter(Content.creator_id == 5)
        sections.update(({ 'NatGeo': [content.to_dict() for content in natgeo] }))
        return { 'categories': categories_dict, 'sections': sections }

    if request.method == 'POST':
        errors = []
        content = Content.query.filter(Content.title == request.form["title"]).first()

        logo_url = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&aspectRatio=1.78&format=png"
        thumbnail_url = "https://wallpaperaccess.com/full/250147.jpg"
        background_picture_url = "https://static-assets.bamgrid.com/product/disneyplus/images/background.dc67869b698f6c927aae59c68d9dda46.png"

        if "logo" in request.files:
            logo = request.files["logo"]
        if "thumbnail" in request.files:
            thumbnail = request.files["thumbnail"]
        if "background_picture" in request.files:
            background_picture = request.files["background_picture"]

        if content is not None:
            errors.append("Content title already exists")
        if not len(request.form["content_type"]):
            errors.append("Specify which type of content this is")
        if not len(request.form["title"]):
            errors.append("Content title required")
        if not len(request.form["description"]):
            errors.append("Description required")
        if not len(request.form["media"]):
            errors.append("Please provide a URL for your content")
        if not len(request.form["categories"]):
            errors.append("Please select at least 1 category")
        if "logo" in request.files and not allowed_file(request.files["logo"].filename):
            errors.append("Please provide a valid logo")
        if "thumbnail" in request.files and not allowed_file(request.files["thumbnail"].filename):
            errors.append("Please provide a valid thumbnail")
        if "background_picture" in request.files and not allowed_file(request.files["background_picture"].filename):
            errors.append("Please provide a valid background picture")

        if len(errors):
            return { "errors": errors }

        if "logo" in request.files:
            logo.filename = get_unique_filename(logo.filename)
            logo_upload = upload_file_to_s3(logo)
            logo_url = logo_upload["url"]

        if "thumbnail" in request.files:
            thumbnail.filename = get_unique_filename(thumbnail.filename)
            thumbnail_upload = upload_file_to_s3(thumbnail)
            thumbnail_url = thumbnail_upload["url"]

        if "background_picture" in request.files:
            background_picture.filename = get_unique_filename(background_picture.filename)
            background_picture_upload = upload_file_to_s3(background_picture)
            background_picture_url = background_picture_upload["url"]

        new_content = Content(
            creator_id=current_user.id,
            content_type=request.form["content_type"],
            title=request.form["title"],
            description=request.form["description"],
            media=request.form["media"],
            logo=logo_url,
            thumbnail=thumbnail_url,
            background_picture=background_picture_url
        )
        db.session.add(new_content)
        db.session.commit()

        for category in request.form["categories"].split(","):
            new_category_for_content = Category_Detail(
                category_id=category,
                content_id=new_content.id
            )
            db.session.add(new_category_for_content)
        db.session.commit()

        return new_content.to_dict()


@content_routes.route('/<int:content_id>', methods=['GET', 'PUT', 'DELETE'])
def one_content(content_id):
    if request.method == 'GET':
        return Content.query.get(content_id).to_dict()

    if request.method == 'PUT':
        errors = []
        content = Content.query.get(content_id)
        content_exists = Content.query.filter(Content.title == request.form["title"], Content.id != content_id).first()

        logo_url = content.logo
        thumbnail_url = content.thumbnail
        background_picture_url = content.background_picture

        if "logo" in request.files:
            logo = request.files["logo"]
        if "thumbnail" in request.files:
            thumbnail = request.files["thumbnail"]
        if "background_picture" in request.files:
            background_picture = request.files["background_picture"]

        if content_exists is not None:
            errors.append("Content title already exists")
        if not len(request.form["title"]):
            errors.append("Content title required")
        if not len(request.form["description"]):
            errors.append("Description required")
        if "logo" in request.files and not allowed_file(request.files["logo"].filename):
            errors.append("Please provide a valid logo")
        if "thumbnail" in request.files and not allowed_file(request.files["thumbnail"].filename):
            errors.append("Please provide a valid thumbnail")
        if "background_picture" in request.files and not allowed_file(request.files["background_picture"].filename):
            errors.append("Please provide a valid background picture")

        if len(errors):
            return { "errors": errors }

        if "logo" in request.files:
            logo.filename = get_unique_filename(logo.filename)
            logo_upload = upload_file_to_s3(logo)
            logo_url = logo_upload["url"]

        if "thumbnail" in request.files:
            thumbnail.filename = get_unique_filename(thumbnail.filename)
            thumbnail_upload = upload_file_to_s3(thumbnail)
            thumbnail_url = thumbnail_upload["url"]

        if "background_picture" in request.files:
            background_picture.filename = get_unique_filename(background_picture.filename)
            background_picture_upload = upload_file_to_s3(background_picture)
            background_picture_url = background_picture_upload["url"]

        content.title = request.form["title"]
        content.description = request.form["description"]
        content.logo = logo_url
        content.thumbnail = thumbnail_url
        content.background_picture = background_picture_url
        db.session.commit()

        return content.to_dict()

    if request.method == 'DELETE':
        content = Content.query.get(content_id)
        db.session.delete(content)
        db.session.commit()
        return content.to_dict()


@content_routes.route('/search/<string:keyword>')
def search(keyword):
    if keyword == "*":
        contents = Content.query.all()
        return { 'contents': [content.to_dict() for content in contents] }
    else:
        contents = Content.query.filter(Content.title.ilike(f"%{keyword}%"))
        return { 'contents': [content.to_dict() for content in contents] }
