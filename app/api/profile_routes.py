from flask import Blueprint, request
from app.models import User, Profile
from flask_login import current_user

import json

profile_routes = Blueprint("profiles", __name__)

@profile_routes.route('/all')
def all_profiles():
    profiles = Profile.query(Profile).filter(Profile.owner_id == current_user.id)
    return [profile.to_dict() for profile in profiles]

@profile_routes.route('/<int:profile_id>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def crud_profiles(profile_id):
    data = request.json
    profile = Profile.query.get(profile_id)

    if request.method == 'GET':
        return profile.to_dict()

    if request.method == 'POST':
        profiles = Profile.query(Profile).filter(Profile.owner_id == current_user.id)
        if len(data["avatar"]) == 0:
            return { "error": "Please, select an avatar." }
        for profile in profiles:
            if profile.name == data["name"]:
                return { "error": "Profile already exists." }
        new_profile = Profile(
            owner_id = current_user.id,
            name = data["name"],
            avatar = data["avatar"]
        )
        db.session.add(new_profile)
        db.session.commit()
        return new_profile.to_dict()

    if request.method == 'PUT':
        if len(data["avatar"]) == 0:
            return { "error": "Please, select an avatar." }
        for profile in profiles:
            if profile.name == data["name"]:
                return { "error": "Profile already exists." }
        profile.name = data["name"]
        profile.avatar = data["avatar"]
        db.session.commit()
        return profile.to_dict()
    
    if request.method == 'DELETE':
        if len(profiles) == 1:
            return { "error": "You must have at least one profile." }
        db.session.delete(profile)
        db.session.commit()
        return profile.to_dict()

@profile_routes.route('/<int:profile_id>/favorite/<int:content_id>', methods=['POST'])
def favorite_content(profile_id, content_id):
    new_favorite = Favorite(profile_id = profile_id, content_id = content_id)
    db.session.add(new_favorite)
    db.session.commit()
    content = Content.query.get(content_id)
    return content.to_dict()

@profile_routes.route('/<int:profile_id>/unfavorite/<int:content_id>', methods=['DELETE'])
def favorite_content(profile_id, content_id):
    favorite = Favorite.query.(Favorite).filter(Favorite.profile_id == profile_id, Favorite.content_id == content_id).first()
    db.session.delete(favorite)
    db.session.commit()
    content = Content.query.get(content_id)
    return content.to_dict()