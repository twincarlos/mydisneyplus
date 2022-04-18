from flask_sqlalchemy import SQLAlchemy
from .db import db

class Category_Detail(db.Model):
    __tablename__ = "category_details"

    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    content_id = db.Column(db.Integer, db.ForeignKey("contents.id"), nullable=False)

    category = db.relationship("Category", back_populates="category_detail")
    content = db.relationship("Content", back_populates="category_detail")

    def to_dict(self):
        return self.content.to_dict()
