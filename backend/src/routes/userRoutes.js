import express from 'express';
const router = express.Router();
import * as userController from '../controllers/userController.js';

router.get('/', userController.getAllUsers);
router.get('/:name', userController.getUserByName);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Finanzas Endpoints
router.post('/finance/create/:id', userController.setUserFinance)
router.put('/finance/update', userController.updateConceptStatus);
router.get('/finance/:id', userController.getFinanceConcepts);
router.get('/finance/seen/:id', userController.getFinanceConceptsSeen);
router.get('/finance/concept/:id', userController.getUserConcepto);

//Fitness Endpoints
router.post('/fitness/create/:id', userController.createRutinaForUser);
router.post('/fitness/add/', userController.addRutina);
router.post('/fitness/delete/', userController.deleteRutina);
router.put('/fitness/check/:rutinaId/:userId', userController.checkRutina);
router.put('/fitness/rutina_name/', userController.editRutinaName);
router.get('/fitness/rutinas/:id', userController.getRutinasByUser);
router.get('/fitness/funcional/:id', userController.getRutinasFuncionales);
router.get('/fitness/maquina/:id', userController.getRutinasMaquina);
router.get('/fitness/pesolibre/:id', userController.getRutinasPesoLibre);
router.get('/fitness/ejercicio/:id', userController.getEjerciciosByRutinaId);
router.get('/fitness/disponible/:userId/:typeId', userController.getRutinasDisponibles);

export default router;
