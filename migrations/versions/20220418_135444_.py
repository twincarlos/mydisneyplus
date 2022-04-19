"""empty message

Revision ID: 8b8eeb16642a
Revises: 7a9df107e801
Create Date: 2022-04-18 13:54:44.664942

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8b8eeb16642a'
down_revision = '7a9df107e801'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('category_details',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=False),
    sa.Column('content_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['category_id'], ['categories.id'], ),
    sa.ForeignKeyConstraint(['content_id'], ['contents.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_column('contents', 'categories')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('contents', sa.Column('categories', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.drop_table('category_details')
    op.drop_table('categories')
    # ### end Alembic commands ###