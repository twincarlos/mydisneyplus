from flask.cli import AppGroup
from .users import seed_users, undo_users
from .contents import seed_contents, undo_contents
from .categories import seed_categories, undo_categories
from .category_details import seed_category_details, undo_category_details

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
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
    undo_users()
    # Add other undo functions here
