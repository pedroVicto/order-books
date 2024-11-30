<script>
    import { page } from "$app/stores";
    import ConteudoAutor from "../../../components/autores/ConteudoAutor.svelte";
  </script>
  
  <ConteudoAutor autor={$page.data.autor} />
  