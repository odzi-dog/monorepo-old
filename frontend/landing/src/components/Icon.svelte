<script>
  // Importing modules
  import FeatherIcons from "feather-icons";

  // Exporting some variables;
  export let name;
  export let attrs;
</script>

{@html FeatherIcons.icons[name].toSvg(attrs)}