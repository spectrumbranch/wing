wing
====

Node HTTP API with action rate limiting.

In progress, extremely experimental.


First major milestone is allowing the creation of sessions, with authentication against an LDAP or database.
Once authenticated, the user can register a player to a lobby or game and send commands. Readonly commands are not rate limited.
