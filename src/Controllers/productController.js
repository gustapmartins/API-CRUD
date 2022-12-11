import db from "../Server/db.js";

export const getProduct = (__, res) => {
    db.query("SELECT * FROM tb_product", (err, result) => {
        if (err) res.status(401).send(err)
        return res.status(200).json({ msg: 'Informações capturadas com sucesso', result })
    })
}

export const addProduct = (req, res) => {
    const values = [
        req.body.name,
        req.body.email
    ]

    db.query("INSERT INTO tb_product(`name`, `email`) VALUES(?)", [values], (err, results) => {
        if (err) return res.status(401).json(err)
        return res.status(200).json({
            msg: "Produto criado com sucesso",
            values
        })
    })
}

export const updateProduct = (req, res) => {
    const values = [
        req.body.name,
        req.body.email
    ]

    db.query("UPDATE tb_product SET `name` = ?, `email` = ? WHERE `id` = ?", [...values, req.params.id], (err) => {
        if(err) return res.status(400).json(err)
        return res.status(200).json({msg: 'Produto atualizado com sucesso', values})
    })
}

export const deleteProduct = (req, res) => {
    const id = req.params.id

    db.query("DELETE FROM tb_product WHERE `id` = ?", [id], (err) => {
        if(err) return res.status(400).json(err)
        return res.status(200).json({msg: 'Produto deletado com sucesso', id})
    })
}