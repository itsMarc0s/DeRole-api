import UserFriendRepository from '../../repositories/userFriendRepository'
import Mocks from '../../mocks/userFriendMocks'
import { faker } from '@faker-js/faker'
import { UserFriend } from '../../models/userFriend'
import firestoreTestHelper from '../../db/helpers/firestoreTestHelper'

beforeAll(()=>{
    firestoreTestHelper.deleteCollection('user-friends')
})

describe('User Friends Repository tests', ()=>{

    const repository = new UserFriendRepository()

    it('Should create user friend entry in the repository', async ()=>{
        const userFriendCreated = await repository.create(Mocks.generateCleanUserFriend())
        expect(userFriendCreated).toBeTruthy()
    })

    it('Should find existing user friend entry in the repository', async ()=>{
        const userFriendCreated = await repository.create(Mocks.generateCleanUserFriend())
        const userFriendFound = await repository.findById(userFriendCreated.id)
        expect(userFriendFound).toBeTruthy()
        expect(userFriendFound?.id).toEqual(userFriendCreated.id)
    })

    it('Should find a list of all existing user friend entries in the repository for a specific user', async ()=>{
        const userFriendCreated = await repository.create(Mocks.generateCleanUserFriend())

        for(let i = 0 ; i < 5; i++){
            await repository.create({
                id: faker.random.alphaNumeric(10),
                user_id: userFriendCreated.user_id,
                friend_id: faker.random.alphaNumeric(10)
            })
        }

        await repository.create({
            id: faker.random.alphaNumeric(10),
            user_id: 'MY_USER_ID',
            friend_id: faker.random.alphaNumeric(10)
        })

        const listOfUserFriends : UserFriend[] = await repository.findAllByUserId(userFriendCreated.user_id)

        expect(listOfUserFriends).toHaveLength(6)

        for(let i = 0 ; i < 6; i++){
            expect(listOfUserFriends[i].user_id).toEqual(userFriendCreated.user_id)
        }

    })

    // it('Should delete user friend entry in the repository', async ()=>{
    //     const userFriendToDelete = await repository.create(Mocks.generateCleanUserFriend())

    //     expect(await repository.delete(userFriendToDelete.id)).toBeTruthy()
    //     expect(await repository.findById(userFriendToDelete.id)).rejects.toThrow('Could not find user friend with this id')
    // })
})