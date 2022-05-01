'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Romulus', {
    // Specify Romulus's interact interface here
  });
  const B = Participant('Remus', {
    // Specify Remus's interact interface here
  });
  init();
  // The first one to publish deploys the contract
  A.publish();
  commit();
  // The second one to publish always attaches
  B.publish();
  commit();
  // write your program here
  exit();
});
