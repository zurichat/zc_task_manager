import HttpRepo from "../../database/repositories/HttpRepo";

export default async function create(params) {
 const repo = new HttpRepo();

 const create = await repo.create(params);

 return create;
}
