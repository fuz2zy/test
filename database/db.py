import aiosqlite


async def init_db():
    async with aiosqlite.connect("database/database.db") as db:

        await db.execute("""CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT,
        cart TEXT)""")

        await db.execute("""CREATE TABLE IF NOT EXISTS dishes (
        dish_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        file_id TEXT,
        category TEXT, 
        price FLOAT,
        time TEXT)""")

        await db.execute("""CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY,
        role TEXT)""""")

        await db.commit()
