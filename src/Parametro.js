import React from 'react';

const Parametros = () => {

    const [user, setUser] = React.useState([])

    React.useEffect(() => {
        obterDados()
    }, [])

    const obterDados = async () => {
        const data = await fetch('http://localhost:8080/api')
        const u = await data.json()
        setUser(u)
    }

    return (
        <div>
            <h1>Deus seja louvado</h1>
            <ul>{
                user.map(item => (
                    <li key={item.id_ag}> - {item.nome} - {item.fone} - {item.email}</li>

                ))
            }</ul>
        </div>
    )
}

export default Parametros;