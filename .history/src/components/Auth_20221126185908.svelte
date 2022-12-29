<script context="module">
import {initAuth} from 'src/auth/index.js';
export const {user, loginWithGoogle} = initAuth();

user.subscribe(v=>console.log(v));
</script>