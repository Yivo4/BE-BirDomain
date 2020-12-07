//contendrá  las funciones que queremos que ejecute el server cuando se visitan las urls.
const Aves = require('../models/Aves');

// traer todas las aves


exports.traerAves = async (req, res) => {
    try {
        const aves = await Aves.find({});
        res.json(aves);
        //res.status(200).json({msg: 'Aves obtenidas correctamente', aves});
    } catch (error) {
        console.log(error);
    }
}

exports.traerAve = async (req, res) => {
    try {
        const ave = await Aves.findById(req.params.id);
        res.json(ave);
    } catch(error) {
        console.log(error);
        
    }
}

// const traerAves = async (req, res, next) => {
//     try {
//         const aves = await Aves.find({});
//         res.status(200).json({msg: 'Aves obtenidas correctamente', aves});
//     } catch (error) {
//         console.log('error al traer todos las aves', error);
//         res.status(500).send({msg:'Ocurrio un error al traer todos las aves'});
//         next();
//     }
//     res.end();
// }
// exports.traerAves = traerAves


// // crear ave

 exports.createAve = async(req, res) => {
     const ave = new Aves(req.body);
     try {
         await ave.save();
        res.status(200).json({ message: 'Ave creado correctamente'});
    } catch (error) {
        console.log('error al crear ave', error);
         res.status(500).send({ msg: 'Ocurrio un error al crear ave' });
     }
     res.end();
}