from flask_sqlalchemy import SQLAlchemy
from .db import db


class Profile(db.Model):
    __tablename__ = "profiles"

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String, nullable=False)
    avatar = db.Column(db.String, nullable=False)

    owner = db.relationship("User", back_populates="profiles")
    favorites = db.relationship("Favorite", back_populates="profile", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'owner': self.owner_id,
            'name': self.name,
            'avatar': self.avatar,
            'favorites': [favorite.to_dict() for favorite in favorites]
        }