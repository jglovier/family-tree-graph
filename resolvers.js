{
  Person: {
    parents(person, args, context) {
      return context.Person.findParents(person.id);
    },
    children(person, args, context) {
      return context.Person.findChildren(person.id);
    },
  },
  Query: {
    getPeople(root, args, context) {
      return context.Person.findAll();
    },
    getPerson(root, args, context) {
      return context.Person.findById(args.id);
    },
  },
}