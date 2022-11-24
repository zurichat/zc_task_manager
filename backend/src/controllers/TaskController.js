export default class TaskController {
    create = async (req, res, next) => {
        try {
           // Request validation required
      
            const result = await create(req.body);
      
            res.send({
              ...result,
            });
          } catch (error) {
            next(error);
          }
    }
}