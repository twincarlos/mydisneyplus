from flask_sqlalchemy import SQLAlchemy
from .db import db


class Favorite(db.Model):
    __tablename__ = "favorites"

    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey("profiles.id"), nullable=False)
    content_id = db.Column(db.Integer, db.ForeignKey("contents.id"), nullable=False)

    profile = db.relationship("Profile", back_populates="favorites")
    content = db.relationship("Content", back_populates="favorite")

    def to_dict(self):
        return {
            'id': self.id,
            'profile_id': self.profile_id,
            'content': self.content.to_dict()
        }
