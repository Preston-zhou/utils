const program = require("commander");

const {
  createProject,
  addComponent,
  addPage,
  addVue3Page,
  addVue3PageSetup,
  addStore,
} = require("./actions");

const createCommands = () => {
  // 创建项目指令
  program
    .command("create <project> [otherArgs...]")
    .description("clone a repository into a newly created directory")
    .action(createProject);

  program
    .command("addcpn <name>")
    .description(
      "add vue component, 例如: preston addcpn NavBar [-d src/components]"
    )
    .action((name) => addComponent(name, program.dest || "src/components"));

  program
    .command("addpage <name>")
    .description("add vue page, 例如: preston addpage Home [-d dest]")
    .action((name) => {
      addPage(name, program.dest || `src/pages/${name.toLowerCase()}`);
    });

  program
    .command("add3page <name>")
    .description("add vue page, 例如: preston add3page Home [-d dest]")
    .action((name) => {
      addVue3Page(name, program.dest || `src/views/${name.toLowerCase()}`);
    });

  program
    .command("add3page_setup <name>")
    .description("add vue page, 例如: preston add3page_setup Home [-d dest]")
    .action((name) => {
      addVue3PageSetup(name, program.dest || `src/views/${name.toLowerCase()}`);
    });

  program
    .command("addstore <name>")
    .description("add vue store, 例如: preston addstore favor [-d dest]")
    .action((name) => {
      addStore(name, program.dest || `src/store/modules/${name.toLowerCase()}`);
    });

  program.command("test").action(() => {
    // terminal.spawn("npm", ['--version']);
    // terminal.exec("npm --version");
    // open('http://localhost:8080/');`
  });
};

module.exports = createCommands;
