import wifi_qrcode_generator.generator 
from PIL import Image

ssid = "CLCODING_WIFI" # your wi-fi name
password = "superSecret12345" # your wi-fi password
security = "WPA" # wi-fi protocol

from wifi_qrcode_generator.generator import wifi_qrcode
qr = wifi_qrcode(ssid, False, security, password)

qr.make_image().save("QR_wifi_code.png")
Image.open("QR_wifi_code.png")