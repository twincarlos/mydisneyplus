from flask_sqlalchemy import SQLAlchemy
from .db import db


class Episode(db.Model):
    __tablename__ = "episodes"

    id = db.Column(db.Integer, primary_key=True)
    season_id = db.Column(db.Integer, db.ForeignKey("seasons.id"), nullable=False)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    thumbnail = db.Column(db.String, nullable=False)
    media = db.Column(db.String, nullable=False)

    season = db.relationship("Season", back_populates="episodes")

    def to_dict(self):
        return {
            'id': self.id,
            'season_id': self.season_id,
            'name': self.name,
            'description': self.description,
            'thumbnail': self.thumbnail,
            'media': self.media
        }
