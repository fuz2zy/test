from dotenv import load_dotenv
import os

load_dotenv()

token = str(os.getenv("TOKEN"))
db_path = "database/database.db"
logs_path = "logs.log"
admin_id = 7716932686
