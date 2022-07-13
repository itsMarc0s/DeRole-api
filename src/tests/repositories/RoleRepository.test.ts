import RoleMocks from "../../mocks/roleMocks"
import RoleRepository from "../../repositories/roleRepository"


describe('Role Repository tests', ()=>{

    const repository = new RoleRepository()

    it('Should create a rolê in the repository', async ()=>{
        const createdRole = await repository.create(RoleMocks.generateCleanRole())
        expect(createdRole).toBeTruthy()
        expect(createdRole).toHaveProperty('id')
        expect(createdRole).toHaveProperty('name')
    })


    it('Should find existing rolê in the repository', async ()=>{
        const createdRole = await repository.create(RoleMocks.generateCleanRole())
        const roleFound = await repository.findById(createdRole.id)

        expect(roleFound).toBeTruthy()
        expect(roleFound?.id).toBe(createdRole.id)
    })

    it('Should update rolê in the repository', async ()=>{
        
        
    })

    it('Should delete rolê in the repository', async ()=>{
        const createdRole = await repository.create(RoleMocks.generateCleanRole())
        const deletedRole = await repository.delete(createdRole.id)

        const foundRole = await repository.findById(createdRole.id)

        expect(deletedRole).toBeTruthy()
        expect(deletedRole?.id).toBe(createdRole.id)
        expect(foundRole).toBeFalsy()
    })
})