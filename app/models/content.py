from flask_sqlalchemy import SQLAlchemy
from .db import db


class Content(db.Model):
    __tablename__ = "contents"

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    content_type = db.Column(db.String, nullable=False)
    title = db.Column(db.String, unique=True, nullable=False)
    description = db.Column(db.Text, nullable=False)
    thumbnail = db.Column(db.String, nullable=False)
    media = db.Column(db.String, nullable=False)
    categories = db.Column(db.String, nullable=False)

    creator = db.relationship("User", back_populates="contents")
    seasons = db.relationship("Season", back_populates="content", cascade="all, delete")
    favorite = db.relationship("Favorite", back_populates="favorite", cascade="all, delete")

    def to_dict(self):
        if self.content_type == "Movie":
            return {
            'id': self.id,
            'creator_id': self.creator_id,
            'content_type': self.content_type,
            'title': self.title,
            'description': self.description,
            'thumbnail': self.thumbnail,
            'media': self.media,
            'categories': self.categories
            'seasons': []
            }
        else:
            return {
            'id': self.id,
            'creator_id': self.creator_id,
            'content_type': self.content_type,
            'title': self.title,
            'description': self.description,
            'thumbnail': self.thumbnail,
            'media': self.media,
            'categories': self.categories
            'seasons': [season.to_dict() for season in self.seasons]
            }