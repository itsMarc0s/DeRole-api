import UserRepository from '../../repositories/userRepository'
import Mocks from '../../mocks/userMocks'
import firestoreTestHelper from '../../db/helpers/firestoreTestHelper'
import { UserNotFoundError } from '../../errors/userFriendErrors'

beforeAll(async ()=>{
    await firestoreTestHelper.deleteCollection('users')
})

describe('User Repository tests', ()=>{

    const repository = new UserRepository()
    const cleanUser = Mocks.generateCleanUser()

    it('Should create user in the repository', async ()=>{
        const userCreated = await repository.create(cleanUser)
        expect(userCreated).toBeTruthy()
    })



    it('Should find existing user in the repository', async ()=>{
        const userToFind = await repository.create(Mocks.generateCleanUser())
        const userFound = await repository.findById(userToFind.id)
        expect(userFound).toBeTruthy()
        expect(userFound?.id).toBe(userToFind.id)
    })

    
    it('Should NOT find inexisting user in the repository', async ()=>{
        await expect(repository.findById('DUMMY_ID')).rejects.toThrow(new UserNotFoundError({
            message: 'Cant find user with this id',
            statusCode: 200,
            name: 'UserNotFound'
        }))
    })

    it('Should update user in the repository', async ()=>{
        const userToUpdate = await repository.create(Mocks.generateCleanUser())
        const updatedUser = await repository.update(userToUpdate.id, {
            name: "Marcos"
        })

        expect(updatedUser).not.toBeFalsy()
        expect(updatedUser?.name).toEqual('Marcos')
        expect(userToUpdate).not.toEqual(updatedUser)
    })

    it('Should delete user in the repository', async ()=>{
        const userToDelete = await repository.create(Mocks.generateCleanUser())
        const deletedUser = await repository.delete(userToDelete.id)
        await expect(repository.findById(userToDelete.id)).rejects.toThrowError("Cant find user with this id")
        expect(deletedUser).toBeTruthy()
    })
})