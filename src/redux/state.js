let state = {
    profilesPage: {
        posts: [
            {id:1, message: 'Hi, how are you?', likesCount: 12},
            {id:2, message: 'Tt\'s my first post!!!', likesCount: 11},
        ],
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"},
        ],
    
        messages: [
            {id:1, message: "Hi"},
            {id:2, message: "How is your Kamasutra"},
            {id:3, message: "Yohey"},
            {id:4, message: "Yohe"},
            {id:5, message: "Yo"},
          ]
    }
    
  }

  export let addPost = (postMessage) => {
    
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    state.profilesPage.posts.push(newPost)
  }

  export default state





