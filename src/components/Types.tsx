export type NewsType ={
    id:number,
    tittle:string,
    body:string
}

export type CommentType ={
   commentBody: {
     id: number,
     commentId: number,
     commentText: string,
   },
}