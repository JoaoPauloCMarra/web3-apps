// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Election {
  string public name;
  string public description;

  struct Candidate {
    uint256 id;
    string name;
    uint256 voteCount;
  }

  mapping(uint256 => Candidate) public candidates;
  mapping(address => bool) public voters;
  uint256 public candidatesCount = 0;

  constructor(string[] memory _info, string[] memory _candidates) {
    require(_candidates.length > 0, 'There should be atleast 1 candidate.');
    name = _info[0];
    description = _info[1];
    for (uint256 i = 0; i < _candidates.length; i++) {
      addCandidate(_candidates[i]);
    }
  }

  function addCandidate(string memory _name) private {
    candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    candidatesCount++;
  }

  function vote(uint256 _candidate) public {
    require(!voters[msg.sender], 'Voter has already Voted!');
    require(_candidate < candidatesCount && _candidate >= 0, 'Invalid candidate to Vote!');
    voters[msg.sender] = true;
    candidates[_candidate].voteCount++;
  }
}
