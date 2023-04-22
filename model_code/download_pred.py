from keras.models import load_model
import numpy as np
import keras.utils as image
import requests
import ast
from urllib import request

file_path = "/Users/jarvis/pymycod/tensorflow_AI/planetary/pics/1.jpg"

def download_img(filepath):
    api_key = "HGgzNs8K2j8VrmMgNshhbbf4w1QYkKTUng0oBA5v"
    url = f"https://api.nasa.gov/planetary/earth/assets?lon=-62.23&lat=-3.23&date=2019-03-03&&dim=0.10&api_key={api_key}"
    ace = requests.get(url)
    data = ast.literal_eval(ace.content.decode('utf-8'))
    uriii = data["url"]
    request.urlretrieve(uriii,filepath) 


def predict(filepath):
    model1 = load_model('/Users/jarvis/pymycod/tensorflow_AI/planetary/lr_model_satellite_wildfires.h5',compile=False)
    img = image.load_img(filepath, target_size = (256,256))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis = 0)
    ans = model1.predict(img)
    print(ans)
    if ans[0]==0:
        print("no wildfire")
    else:
        print("fireeeeeee")

download_img(file_path)
predict(file_path)