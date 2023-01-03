from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Category_Detail(db.Model):
    __tablename__ = "category_details"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("categories.id")), nullable=False)
    content_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("contents.id")), nullable=False)

    category = db.relationship("Category", back_populates="category_detail")
    content = db.relationship("Content", back_populates="category_detail")

    def to_dict(self):
        return self.content.to_dict()
