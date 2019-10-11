with import <nixpkgs> {};
mkShell {
  buildInputs = [
    kakoune
    nodejs
    vagrant
  ];
}
