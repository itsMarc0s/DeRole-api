import firestoreTestHelper from '../../db/helpers/firestoreTestHelper'
import UserRoleMocks from '../../mocks/userRoleMocks'
import UserRoleRepository from '../../repositories/userRoleRepository'

beforeAll(async () => {
    await firestoreTestHelper.deleteCollection('user-roles')
})

describe('User Rolê Repository tests', () => {

    const repository = new UserRoleRepository

    it('Should add user subscription to a role in the repository', async () => {
        const userAddedToRole = await repository.create(UserRoleMocks.generateCleanUserRole())
        expect(userAddedToRole).toBeTruthy()
    })

    it('Should find user subscription to a role in the repository', async () => {
        const userAddedToRole = await repository.create(UserRoleMocks.generateCleanUserRole())
        const userFound = await repository.findById(userAddedToRole?.id)

        expect(userAddedToRole).toBeTruthy()
        expect(userFound).toBeTruthy()
        expect(userFound.id).toBe(userAddedToRole.id)
    })


    it('Should not find inexistent user subscription to a role in the repository', async () => {
        await expect(repository.findById('NEVER_POSSIBLE_ID')).rejects.toThrow('Could not find user role with this id')
    })

    it('Should delete user subscription to a role in the repository', async () => {
        const userToDelete = await repository.create(UserRoleMocks.generateCleanUserRole())
        expect(await repository.delete(userToDelete.id)).toBeTruthy()
        await expect(repository.findById(userToDelete.id)).rejects.toThrowError('Could not find user role with this id')
    })
})