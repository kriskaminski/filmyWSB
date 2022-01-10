<script>
    import { run } from "tripetto-runner-autoscroll";
    import Services from "tripetto-services";

    const { snapshot, attachments, onSubmit, onPause } = Services.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQ1EvajJFWDdxU1NZWWNTaXczQ0xsSjUrdDFPZGNaM2VyN2llRmNpMllWRT0iLCJkZWZpbml0aW9uIjoiMmpiQ1BJY3BOcGh3S21oNlFqb21yT1FKcElheEpuTW9SbFZpS2RDUGFRRT0iLCJ0eXBlIjoiY29sbGVjdCJ9.Fx5pG_t38FvWEazcyofhBAqpTY7i6pCMWmyiZFbsVJM" });

    run({
    element: document.body,
    definition: {"clusters":[{"id":"ba2c876883df9e913c5c8a85e2209518a0e66b6740850e517b902606a0ba4861","nodes":[{"id":"b7117a3e08705b908194c51796384a279065bbe5601c94d6ecfd1f6c5d1166db","name":"Jak masz na imię?","nameVisible":true,"slots":[{"id":"368171cd23c00b498cbfbe077da9d4af6671acce57c0bc06c111b67f01df5252","type":"text","kind":"static","reference":"value","label":"Text","alias":"imię"}],"block":{"type":"tripetto-block-text","version":"5.0.3"}},{"id":"44904266a58aa45a8ea897869eecdb0499f61261a83f5ff07444e526bcb598e7","name":"Cześć @368171cd23c00b498cbfbe077da9d4af6671acce57c0bc06c111b67f01df5252","nameVisible":true}]}],"builder":{"name":"tripetto","version":"4.4.2"}},
    attachments,
    onSubmit
})
</script>
