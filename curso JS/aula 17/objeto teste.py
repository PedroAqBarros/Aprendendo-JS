class Amigo:
    def __init__(self, nome, sexo, peso):
        self.nome = nome
        self.sexo = sexo
        self.peso = peso
    def engordar(self, p=0):
        print('Engordou')
        self.peso += p
    def __str__(self):
        return f'{self.nome} pesa {self.peso}kg'
amigo = Amigo(nome='José', sexo='m', peso=85.4)
amigo.engordar(2)
print(amigo)