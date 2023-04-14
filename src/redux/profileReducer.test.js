import profileReducer, { addPostActionCreator } from "./profileReducer";

let state = {
    posts: [
        {id:1, message: 'Hi, how are you?', likesCount: 12},
        {id:2, message: 'Tt\'s my first post!!!', likesCount: 11},
        {id:3, message: 'Tt\'s my second post!!!', likesCount: 20},
    ]
}
test('Length of posts should be inceremented', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com")
   
    //2. action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.posts.length).toBe(4)
  });

  test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com")
   
    //2. action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com")
  });
