async function postFormHandler(event) {
    event.preventDefault();

    const post_text = document.querySelector('textarea[name="post-body"]').value.trim();

    const post_title = document.querySelector('input[name="post-title"]').value.trim();

    if(post_text){
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                post_title,
                post_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.ok){
            document.location.reload();
        }else{
            alert(response.statusText);
        }
    }
}

document.querySelector('.post-form').addEventListener('submit', postFormHandler);