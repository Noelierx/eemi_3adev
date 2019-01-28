
# coding: utf-8

# In[1]:


print('hello world')


# In[2]:


a = 2


# In[3]:


print(a)


# In[4]:


b = 3


# In[5]:


print(b)


# In[6]:


# les comentaires, c'est comme ça


# In[8]:


[0] * 5


# In[1]:


ma_liste = [1,3,5,8,9]
print(ma_liste[0:3])


# In[2]:


print(ma_liste[:3])
print(ma_liste[:-1])
print(ma_liste[2:])
print(ma_liste[2::2])
print(ma_liste[::-1])


# In[3]:


moitie_1 = ma_liste[:len(ma_liste)//2]
moitie_2 = ma_liste[len(ma_liste)//2:]


# In[4]:


print(moitie_1, moitie_2)


# In[7]:


nom = "Bolnet"
age = 27
print("Bonjour je m'appelle %s ! J'ai %d ans."%(nom,age))
print("Bonjour je m'appelle %(nom)s ! J'ai %(age)d ans. As-tu aussi %(age)d ans ?"%{'nom' : nom, 'age': age, 'age': age})


# # Expresion régulières

# In[8]:


import re

print(re.match("GR(.)?S", "GRIS")) #soit n'importe quelle caractère ou 1 seul au milieu 
print(re.match("GR(.){2,4}S", "GRIIS")) # intervalle, il faut au moins 2 caractères entre les 2.
print(re.match("GR([a-cA-c]){2,4}S", "GRaAS")) # intervalle, il faut au moins 2 caractères entre les 2 et compris entre a-c et A-C.

print(re.findall("([0-9]+)", "Bonjour 111 Aurevoir 222"))# trouve toutes les occurences

print(re.sub("([0-9]+)", "Bonjour ", "Bonjour 111 Aurevoir 222"))# remplace les occurences d'uen chaîne de caractères


# In[14]:


#Pratique
#1 - Trouver l'expression régulière qui match les handlebars : "{{ ma_variable }}"
#2 - Remplacer les handlebars par votre nom
print(re.findall("\{\{.*\}\}", "Bonjour {{ma_variable}}"))
print(re.findall("\{\{[^\}]*\}\}", "Bonjour {{variable}} {{nom}}"))

print(re.sub("\{\{[^\}]*\}\}", "Bolnet", "Bonjour {{variable}} {{nom}}"))


# # Structure Conditionnelles

# In[17]:


age  = 25
if age > 18:
    print("Vous êtes majeur !")
else:
    print("vous êtes mineur")


# In[18]:


mineur = "Mineur" if age < 18 else "Majeur"
print (mineur)


# # Les boucles for

# In[19]:


for i in [1,5,3,4]:
    print(i)


# In[20]:


for i in range(4):
    print(i)


# # compréhensive liste

# In[22]:


ma_liste = [2,6,4,3,8]
print([2*i for i in ma_liste]) #pour tous les éléments i de ma liste, je les multiplie par 2


# In[23]:


print([i%2 for i in ma_liste])


# # les functions

# In[25]:


def dire_bonjour():
    print('bonjour monsieur')

def dire_bonjour2(firstname, lastname, name2="Marie", name3="Robert"):
    print("Bonjour %s, %s"%(firstname, lastname))
    print("Saluer aussi %s, %s"%(name2, name3))
    
dire_bonjour2("Martin", "Pierre", "Kyllian")
dire_bonjour2("Martin", "Pierre", name3="Kyllian")


# # Pratique : tris
# 
# 1 - Votre tri
# 
# 2 - Tri bulle
# 
# 3 - Tri fusion

# In[66]:


#tri a bulle
liste = [3,2,6,5,4,9]

def mon_tri(arr):
    for j in range(len(arr)-1):
        for i in range(len(arr)-1):
            if arr[i] > arr[i+1]:
                arr[i:i+2] = [arr[i+1], arr[i]]
    return arr
print(mon_tri(liste))


# In[88]:


#tri fusion
def fusion(arr1, arr2):
    i = 0
    j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            res.append(arr1[i])
            i+=1
        else:
            res.append(arr2[j])
            j+=1
    res.extend(arr1[i:])
    res.extend(arr2[j:])
    return res
print(fusion([3,2,6],[5,4,9]))

def tri_fusion(arr):
    if len(arr)<=1:
        return arr
    elif len(arr) == 2:
         if arr[0] > arr[1]:
                return [arr[1], arr[0]]
            return arr
        else :
            return fusion(tri_fusion(arr[:len(arr)//2]), tri_fusion(arr[len(arr)//2:]))


# # CoinDesk BPI DATA

# In[89]:


data = {"bpi":{"2018-08-27":6907.6613,"2018-08-28":7076.745,"2018-08-29":7035.8125,"2018-08-30":6982.4,"2018-08-31":7013.9738,"2018-09-01":7192.2988,"2018-09-02":7295.13,"2018-09-03":7261.4863,"2018-09-04":7358.4963,"2018-09-05":6687.0125,"2018-09-06":6498.6188,"2018-09-07":6396.2688,"2018-09-08":6183.38,"2018-09-09":6238.54,"2018-09-10":6305.5738,"2018-09-11":6282.9213,"2018-09-12":6328.93,"2018-09-13":6486.6213,"2018-09-14":6492.375,"2018-09-15":6515.8988,"2018-09-16":6497.3663,"2018-09-17":6251.16,"2018-09-18":6334.1963,"2018-09-19":6388.9788,"2018-09-20":6491.64,"2018-09-21":6753.18,"2018-09-22":6712.1675,"2018-09-23":6701.2975,"2018-09-24":6581.51,"2018-09-25":6434.6488,"2018-09-26":6458.6525},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.","time":{"updated":"Sep 27, 2018 00:03:00 UTC","updatedISO":"2018-09-27T00:03:00+00:00"}}


# In[96]:


print(data.keys())
print(data['bpi'])
x = data['bpi'].keys()
y = data['bpi'].values()
print(x,y)


# In[100]:


import matplotlib.pyplot as plt

plt.plot([1,2,3,4],[10,20,15,3])
plt.show()


# In[101]:


plt.plot(x,y)
plt.show()


# In[122]:


import requests

res = requests.get('https://api.coindesk.com/v1/bpi/historical/close.json')
#print(res.json().data['bpi'].keys())
print(res.json()['bpi'].keys())
print(res.json()['bpi'].values())


# In[149]:


def print_bitcoin_hist(start, end):
    res = requests.get('https://api.coindesk.com/v1/bpi/historical/close.json?start='+start+'&end='+end)
    x = list(res.json()['bpi'].keys())
    y = list(res.json()['bpi'].values())
    
    moy_y = sum(y) / len(y) 
    print(moy_y)
    plt.plot(x,y)
    
    while i < 5
    plt.scatter(x[:5],y[:5], color='red')
    plt.show()
    return


# In[151]:


print_bitcoin_hist('2013-10-02','2013-10-07')

