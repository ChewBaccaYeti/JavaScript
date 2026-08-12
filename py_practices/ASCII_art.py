from art import text2art

result = text2art("VENEDYKT");
print(result);

with open("ACSII_art.txt", "a") as f:
    print(result, file=f)
