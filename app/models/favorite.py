from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod


class Favorite(db.Model):
    __tablename__ = "favorites"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("profiles.id")), nullable=False)
    content_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("contents.id")), nullable=False)

    profile = db.relationship("Profile", back_populates="favorites")
    content = db.relationship("Content", back_populates="favorite")

    def to_dict(self):
        return {
            'id': self.id,
            'profile_id': self.profile_id,
            'content': self.content.to_dict()
        }
