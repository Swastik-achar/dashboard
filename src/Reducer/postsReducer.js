const postsInitialState=[]

const postsReducer=(state=postsInitialState,action)=>{
    switch(action.type){
        case 'SET_POSTS':{
            console.log(action.payload)
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default postsReducer