from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod


class Profile(db.Model):
    __tablename__ = "profiles"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
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
            'favorites': [favorite.to_dict() for favorite in self.favorites]
        }
