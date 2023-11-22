# API E-Commerce (Projeto Hackakenzie nov/23)

baseurl: http://localhost:3000

# Rotas

# USERS

### POST /users
Rota responsavel por cadastrar um novo usuário.


Corpo de requisição:

```JSON
{
	"name": "joãozinho",
	"email": "joao_zin@mail.com",
	"password": "1234"
}
```

<details>
<summary>Segurança</summary>
    <ul>
<li>Não é necessário autorização.</li>
<li>✔ Hash de senha</li>
    </ul>
</details>

<br />

<details>
<summary>Retornos</summary>
<br>
201 - Sucesso:

```JSON

{
	"id": 1,
	"name": "joãozinho",
	"email": "joao_zin@mail.com",
	"password": "$2a$10$cQRbwkq3H7MHkTluq0EvqORTtOpUvE7rU426.lCFQePDT054vj252",
	"createdAt": "2023-11-15T19:28:31.665Z"
}
```
</details>

<hr />



# ADDRESSES
### POST /users/:userId/addresses
Rota responsavel por cadastrar um novo endereço.

Corpo de requisição:

```JSON
{
	"name": "Kenzie",
	"street": "R. Gen. Mário Tourinho",
	"number": 1733,
	"neihborhood": "Seminário",
	"city": "Curitiba",
	"state": "PR",
	"zip": "80740-000",
	"complement": "Empresa",
}
```

<details>
<summary>Segurança</summary>
    <ul>
        <li>Necessário Token (Em progresso).</li>
    </ul>
</details>

<br />

<details>
<summary>Retornos</summary>
<br>
201 - Sucesso:

```JSON
{
	"message": "Endereço cadastrado com sucesso!",
	"address": {
		"id": 1,
		"name": "Kenzie",
		"street": "R. Gen. Mário Tourinho",
		"neihborhood": "Seminário",
		"number": 1733,
		"zip": "80740-000",
		"state": "PR",
		"city": "Curitiba",
        "complement": "Empresa",
		"userId": 1
	}
}
```
<br>
404 - Usuário não encontrado

```JSON
{
	"message": "Usuário não encontrado."
}
```
<br>
400 - Corpo inválido (Zod)

```JSON
{
	"message": {
		"street": [
			"Required"
		]
	}
}
```


</details>


