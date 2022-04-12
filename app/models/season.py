from flask_sqlalchemy import SQLAlchemy
from .db import db


class Season(db.Model):
    __tablename__ = "seasons"

    id = db.Column(db.Integer, primary_key=True)
    content_id = db.Column(db.Integer, db.ForeignKey("contents.id"), nullable=False)
    
    content = db.relationship("Content", back_populates="seasons")
    episodes = db.relationship("Episode", back_populates="season", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'content_id': self.content_id,
            'episodes': [episode.to_dict() for episode in self.episodes]
        }