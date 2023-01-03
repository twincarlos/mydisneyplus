from flask.cli import AppGroup
from .users import seed_users, undo_users
from .profiles import seed_profiles, undo_profiles
from .contents import seed_contents, undo_contents
from .categories import seed_categories, undo_categories
from .category_details import seed_category_details, undo_category_details
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # Add a truncate command here for every table that will be seeded.
        db.session.commit()
    seed_users()
    seed_profiles()
    seed_contents()
    seed_categories()
    seed_category_details()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_category_details()
    undo_categories()
    undo_contents()
    undo_profiles()
    undo_users()
    # Add other undo functions here
