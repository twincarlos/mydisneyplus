from flask import Blueprint, request
from app.models import User, Profile, Favorite, db
from flask_login import current_user
import json

profile_routes = Blueprint("profiles", __name__)

@profile_routes.route('/set-profile/<int:profile_id>', methods=['PUT'])
def set_profile(profile_id):
    if request.method == 'PUT':
        profile = Profile.query.get(profile_id)
        current_user.current_profile_id = profile_id
        db.session.commit()
        return profile.to_dict()


@profile_routes.route('', methods=['GET', 'POST'])
def all_profiles():
    profiles = Profile.query.filter(Profile.owner_id == current_user.id).all()

    if request.method == 'GET':
        return [profile.to_dict() for profile in profiles]

    if request.method == 'POST':
        data = request.json
        if len(profiles) == 5:
            return { "error": "You may not have more than 5 profiles." }
        if not len(data["name"]):
            return { "error": "Please provide a name for your profile." }
        for profile in profiles:
            if profile.name == data["name"]:
                return { "error": "Profile already exists." }
        if not len(data["avatar"]):
            return { "error": "Please select an avatar." }
        new_profile = Profile(
            owner_id = current_user.id,
            name = data["name"],
            avatar = data["avatar"]
        )
        db.session.add(new_profile)
        db.session.commit()
        return new_profile.to_dict()


@profile_routes.route('/<int:profile_id>', methods=['PUT', 'DELETE'])
def crud_profiles(profile_id):
    data = request.json
    profile = Profile.query.get(profile_id)
    profiles = Profile.query.filter(Profile.owner_id == current_user.id).all()

    if request.method == 'PUT':
        if not len(data["name"]):
            return { "error": "Please provide a name for your profile." }
        for prof in profiles:
            if prof.name == data["name"] and prof.id != profile_id:
                return { "error": "Profile already exists." }
        if not len(data["avatar"]):
            return { "error": "Please select an avatar." }
        profile.name = data["name"]
        profile.avatar = data["avatar"]
        db.session.commit()
        return profile.to_dict()

    if request.method == 'DELETE':
        if len(profiles) == 1:
            return { "error": "You must have at least one profile." }
        if current_user.current_profile_id == profile_id:
            current_user.current_profile_id = None
            db.session.commit()
        db.session.delete(profile)
        db.session.commit()
        return profile.to_dict()


@profile_routes.route('/<int:profile_id>/favorite/<int:content_id>', methods=['POST', 'DELETE'])
def favorite_content(profile_id, content_id):
    if request.method == 'POST':
        new_favorite = Favorite(profile_id=profile_id, content_id=content_id)
        db.session.add(new_favorite)
        db.session.commit()
        return new_favorite.to_dict()

    if request.method == 'DELETE':
        favorite = Favorite.query.filter(Favorite.profile_id == profile_id, Favorite.content_id == content_id).first()
        db.session.delete(favorite)
        db.session.commit()
        return str(content_id)
