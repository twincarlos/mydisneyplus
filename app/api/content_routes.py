from flask import Blueprint, request
from app.models import Content, Category, Category_Detail, db
from flask_login import current_user
import json

content_routes = Blueprint("contents", __name__)

@content_routes.route('', methods=['GET', 'POST'])
def all_contents():
    if request.method == 'GET':
        categories = Category.query.all()
        dict = {}

        for category in categories:
            category_details = Category_Detail.query.filter(Category_Detail.category_id == category.id)
            dict.update({ category.name: [content.to_dict() for content in category_details] })

        contents_with_banner = Content.query.filter(Content.banner != None)
        dict.update({ 'Banner': [content.to_dict() for content in contents_with_banner] })

        originals = Content.query.filter(Content.creator_id == 1)
        dict.update({ 'Originals': [content.to_dict() for content in originals] })
        return dict
