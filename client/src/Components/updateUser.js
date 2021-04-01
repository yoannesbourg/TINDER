export const updateUser = async (id) => {
    // e.preventDefault()
    try {

        await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
       
      })
      // handleEditFunction()
    } catch (err) {
      console.error(err.message)
    }
}