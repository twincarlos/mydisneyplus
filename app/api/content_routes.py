from flask import Blueprint, request
from app.models import Content, db
from flask_login import current_user
import json

content_routes = Blueprint("contents", __name__)

@content_routes.route('', methods=['GET', 'POST'])
def all_contents():
    contents = Content.query.all()

    if request.method == 'GET':
        return { "contents": [content.to_dict() for content in contents] }
