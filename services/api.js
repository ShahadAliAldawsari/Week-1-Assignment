
export async function fetchUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        return await response.json();
    }catch(error){
        throw new Error("<li>Error fetching users</li>");
    }
}