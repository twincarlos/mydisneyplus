from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod


class Content(db.Model):
    __tablename__ = "contents"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    content_type = db.Column(db.String, nullable=False)
    title = db.Column(db.String, unique=True, nullable=False)
    description = db.Column(db.Text, nullable=False)
    media = db.Column(db.String, nullable=False)
    logo = db.Column(db.String)
    banner = db.Column(db.String)
    thumbnail = db.Column(db.String)
    background_picture = db.Column(db.String)

    creator = db.relationship("User", back_populates="contents")
    favorite = db.relationship("Favorite", back_populates="content", cascade="all, delete")
    category_detail = db.relationship("Category_Detail", back_populates="content", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'creator': {
                'id': self.creator.id,
                'username': self.creator.username
            },
            'content_type': self.content_type,
            'title': self.title,
            'description': self.description,
            'media': self.media,
            'logo': self.logo,
            'banner': self.banner,
            'thumbnail': self.thumbnail,
            'background_picture': self.background_picture
        }
