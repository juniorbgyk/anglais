def empiler(liste, n):
    liste.append(n)
    print(liste)

def deplier(liste, bench):
    v = liste.pop(len(liste)-1)
    bench.append(v)
    print(liste)
    print(bench)

def est_vide(liste):
    if not liste:
        print(True)
    else:
        print(False)     

